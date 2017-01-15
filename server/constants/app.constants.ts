export class AppConstants {
    static root = process.cwd();
    static mode: boolean = (process.env.NODE_ENV === 'production') ? true : false;
    static clientFiles = AppConstants.mode ? '/client/dist/' : '/client/dev/';
}