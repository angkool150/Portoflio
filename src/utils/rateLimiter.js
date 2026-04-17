// Rate limiter to prevent abuse
class RateLimiter {
    constructor(maxRequests = 10, timeWindow = 60000) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = new Map();
    }

    isAllowed(key) {
        const now = Date.now();
        const userRequests = this.requests.get(key) || [];
        
        // Remove old requests outside time window
        const recentRequests = userRequests.filter(
            timestamp => now - timestamp < this.timeWindow
        );

        if (recentRequests.length >= this.maxRequests) {
            return false;
        }

        recentRequests.push(now);
        this.requests.set(key, recentRequests);
        return true;
    }

    reset(key) {
        this.requests.delete(key);
    }
}

// Create limiter instances
export const videoLoadLimiter = new RateLimiter(5, 10000); // 5 videos per 10 seconds
export const imageLoadLimiter = new RateLimiter(20, 10000); // 20 images per 10 seconds
