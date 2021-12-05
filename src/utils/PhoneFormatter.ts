import {Str} from '@/utils/Str';

export class PhoneFormatter {
    // +380995617133 -> +38 099 561 71 33
    static format(phone: string): string {
        let newString = Str.insert(phone, 3, ' ');
        newString = Str.insert(newString, 7, ' ');
        newString = Str.insert(newString, 11, ' ');
        return Str.insert(newString, 14, ' ');
    }
}
