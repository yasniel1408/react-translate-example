import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LaguageDetector from 'i18next-browser-languagedetector';

i18n
.use(Backend)
.use(LaguageDetector)
.use(initReactI18next).init({
    fallbackLng: "es",
})