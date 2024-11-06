export default function useTelegram ()  {
    const tg = window.Telegram.WebApp
    const user = window.Telegram.WebApp.initDataUnsafe?.user

    return {
        tg, user
    }
}