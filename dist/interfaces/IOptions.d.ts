import * as FirebaseAdmin from 'firebase-admin';
export default interface IOptions {
    firebase: FirebaseAdmin.app.App;
    verbose?: boolean;
}
