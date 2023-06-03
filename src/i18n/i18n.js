import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { HOME_EN } from './Locates/en/home';
import { NAV_EN } from './Locates/en/nav';
import { HOME_VI } from './Locates/vi/home';
import { NAV_VI } from './Locates/vi/nav';
import { HOME_JP } from './Locates/jp/home';
import { NAV_JP } from './Locates/jp/nav';
import { PRODUCT_DETAIL_EN } from './Locates/en/prodcutDetail';
import { PRODUCT_DETAIL_JP } from './Locates/jp/prodcutDetail';
import { PRODUCT_DETAIL_VI } from './Locates/vi/prodcutDetail';
import { CART_EN } from './Locates/en/cart';
import { CART_VI } from './Locates/vi/cart';
import { CART_JP } from './Locates/jp/cart';
import { CHECKOUT_JP } from './Locates/jp/checkout';
import { CHECKOUT_EN } from './Locates/en/checkout';
import { CHECKOUT_VI } from './Locates/vi/checkout';
import { USER_PROFILE_VI } from './Locates/vi/userProfile';
import { USER_PROFILE_EN } from './Locates/en/userProfile';
import { USER_PROFILE_JP } from './Locates/jp/userProfile';
import { LOGIN_VI } from './Locates/vi/login';
import { LOGIN_EN } from './Locates/en/login';
import { LOGIN_JP } from './Locates/jp/login';
i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        lng: 'vi',
        fallbackLng: 'vi',
        ns: ["home", "nav", "productDetail", "cart", "checkout", "userProFile", "login"],
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            vi: {
                home: HOME_VI,
                nav: NAV_VI,
                productDetail: PRODUCT_DETAIL_VI,
                cart: CART_VI,
                checkout: CHECKOUT_VI,
                userProFile: USER_PROFILE_VI,
                login: LOGIN_VI,
            },
            en: {
                home: HOME_EN,
                nav: NAV_EN,
                productDetail: PRODUCT_DETAIL_EN,
                cart: CART_EN,
                checkout: CHECKOUT_EN,
                userProFile: USER_PROFILE_EN,
                login: LOGIN_EN,
            },

            jp: {
                home: HOME_JP,
                nav: NAV_JP,
                productDetail: PRODUCT_DETAIL_JP,
                cart: CART_JP,
                checkout: CHECKOUT_JP,
                userProFile: USER_PROFILE_JP,
                login: LOGIN_JP
            }

        }
    });

export const locate = {
    vi: "Tiếng Việt",
    en: "English",
    jp: "日本"
}

export const imgLocate = {
    vi: "https://viblo.asia/images/vi-flag-32x48.png",
    en: "https://viblo.asia/images/en-flag-32x48.png",
    jp: "https://img.freepik.com/premium-vector/japan-black-map-flag-vector-concept_572070-388.jpg?w=2000"
}



export default i18n;