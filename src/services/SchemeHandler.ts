import {Scheme} from '@/constants/scheme';

const SCHEME_QUERY = '(prefers-color-scheme: dark)';
const SCHEME_ATTRIBUTE = 'data-theme';
const LOCAL_STORAGE_KEY = 'color-scheme';

export class SchemeHandler {
    private darkSchemeMedia = matchMedia(SCHEME_QUERY);

    public setupListener(): void {
        window.matchMedia(SCHEME_QUERY).addEventListener('change', () => {
            const savedScheme = this.getSavedScheme();
            const systemScheme = this.getSystemScheme();

            if (savedScheme === Scheme.Auto) {
                this.switchMedia(systemScheme);
            }
        });
    }

    public setupScheme(): void {
        const savedScheme = this.getSavedScheme();
        const systemScheme = this.getSystemScheme();

        if (savedScheme === Scheme.Auto) {
            this.switchMedia(systemScheme);
            return;
        }

        this.setScheme(savedScheme);
    }

    public setScheme(scheme: Scheme): void {
        this.switchMedia(scheme);

        if (scheme === Scheme.Auto) {
            this.clearScheme();
        } else {
            this.saveScheme(scheme);
        }
    }

    public getSavedScheme(): Scheme {
        const scheme = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (scheme === null) {
            return Scheme.Auto;
        }

        return scheme as Scheme;
    }

    private switchMedia(scheme: Scheme): void {
        document.documentElement.setAttribute(SCHEME_ATTRIBUTE, scheme);
    }

    private getSystemScheme(): Scheme {
        return this.darkSchemeMedia.matches ? Scheme.Dark : Scheme.Light;
    }

    private saveScheme(scheme: Scheme): void {
        localStorage.setItem(LOCAL_STORAGE_KEY, scheme);
    }

    private clearScheme(): void {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
}
