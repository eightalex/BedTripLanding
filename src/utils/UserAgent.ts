export class UserAgent {
    public static checkIsBot(): boolean {
        const botRegex = /bot|googlebot|crawler|spider|robot|crawling/i;

        if (navigator.userAgent === undefined) {
            return true;
        }

        return botRegex.test(navigator.userAgent);
    }
}
