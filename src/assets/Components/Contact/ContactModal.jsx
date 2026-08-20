import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../context/ThemeContext.jsx'

const initialForm = {
    name: '',
    email: '',
    category: '',
    project: '',
}

function ContactModal({ isOpen, onClose }) {
    const { isLight } = useTheme()
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        if (!isOpen) return undefined

        const handleEscape = (event) => {
            if (event.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handleChange = (event) => {
        setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }))
        setStatus({ type: '', message: '' })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSending(true)
        setStatus({ type: '', message: '' })

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            setIsSending(false)
            setStatus({ type: 'error', message: 'Email service is not configured yet. Please try again later.' })
            return
        }

        try {
            await emailjs.send(serviceId, templateId, {
                user_name: form.name,
                user_email: form.email,
                editing_category: form.category,
                message: form.project,
                reply_to: form.email,
            }, publicKey)
            setForm(initialForm)
            setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
        } catch {
            setStatus({ type: 'error', message: 'Something went wrong while sending your message. Please try again.' })
        } finally {
            setIsSending(false)
        }
    }

    const inputClass = `${isLight ? 'bg-white text-black placeholder:text-black/50 border-black border-2 focus:border-black' : 'bg-black/40 text-white placeholder:text-white/50 border-white/30 focus:border-white'} w-full rounded-xl border px-4 py-3 outline-none transition`

    return (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4' role='dialog' aria-modal='true' aria-labelledby='contact-title' onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <div className='absolute inset-0 bg-black/70 backdrop-blur-sm' onMouseDown={onClose} />
            <div className={`${isLight ? 'bg-white text-black' : 'bg-neutral-950 text-white'} relative max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/30 p-6 shadow-2xl sm:p-8`}>
                <div className='mb-6 flex items-start justify-between gap-4'>
                    <div>
                        <p className='mb-2 text-xs uppercase tracking-[0.25em] opacity-60'>Start a project</p>
                        <h2 id='contact-title' className='text-3xl font-bold'>Get in Touch</h2>
                    </div>
                    <button type='button' onClick={onClose} aria-label='Close contact form' className='text-2xl leading-none opacity-70 transition hover:opacity-100'>
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='space-y-5'>
                    <label className='block text-sm font-medium'>
                        Name
                        <input className={`${inputClass} mt-2`} type='text' name='name' value={form.name} onChange={handleChange} placeholder='Your name' required />
                    </label>
                    <label className='block text-sm font-medium'>
                        Email
                        <input className={`${inputClass} mt-2`} type='email' name='email' value={form.email} onChange={handleChange} placeholder='you@example.com' required />
                    </label>
                    <label className='block text-sm font-medium'>
                        What type of editing do you need?
                        <select className={`${inputClass} mt-2`} name='category' value={form.category} onChange={handleChange} required>
                            <option value='' disabled>Select a category</option>
                            <option value='Video Editing'>Video Editing</option>
                            <option value='Graphic and Layout Design'>Graphic and Layout Design</option>
                            <option value='Sublimation Design'>Sublimation Design</option>
                            <option value='3D Design'>3D Design</option>
                            <option value='Other'>Other</option>
                        </select>
                    </label>
                    <label className='block text-sm font-medium'>
                        Tell me about your project
                        <textarea className={`${inputClass} mt-2 min-h-32 resize-y`} name='project' value={form.project} onChange={handleChange} placeholder='What would you like to create?' required />
                    </label>

                    {status.message && <p className={`text-sm ${status.type === 'success' ? 'text-emerald-500' : 'text-red-400'}`} role='status'>{status.message}</p>}

                    <button type='submit' disabled={isSending} className={`${isLight ? 'bg-black text-white' : 'bg-white text-black'} w-full rounded-xl px-5 py-3 font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60`}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactModal