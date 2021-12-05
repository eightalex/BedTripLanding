export class Str {
    static insert(string: string, index: number, additional: string): string {
        if (index > 0) {
            return string.substring(0, index) + additional + string.substr(index);
        }

        return additional + string;
    }
}
