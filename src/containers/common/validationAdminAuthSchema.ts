import * as Yup from "yup"
export const validationAdminAuthSchema = Yup.object().shape({
    email: Yup.string()
        .email("email invalide")
        .required("l'email est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(8, "Mot de passe doit être plus grand que 8 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères")
});

export const adminAuthInitialValues = {
    email: "",
    password: ""
};