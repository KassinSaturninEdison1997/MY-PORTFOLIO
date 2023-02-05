export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/** 
 * Contient au moins 8 caractères.
 * Contient au moins une lettre minuscule.
 * Contient au moins une lettre majuscule.
 * Contient au moins un chiffre.
 * Contient au moins un caractère spécial (@, $, !, %, *, ?, &).
 * 
*/
