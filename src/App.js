import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import './App.css'

const languages = [
  {
    code: 'fr',
    name: 'RO',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'RU',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'ENG',
    country_code: 'sa',
  },
]

export default function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  return (
    <div>
      <div className="navbar">
        <div className="container d-flex" aria-labelledby="dropdownMenuButton1">
          <h3 className="logo">LOGO</h3>
          <ul className="sections">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <ul className="language-select">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <a
                  href="#"
                  className={classNames('language-item', {
                    disabled: currentLanguageCode === code,
                  })}
                  onClick={() => {
                    i18next.changeLanguage(code)
                  }}
                >
                  <span
                    style={{
                      color: currentLanguageCode === code ? '#fff' : '#000',
                    }}
                  >
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>


          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentLanguageCode}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <svg className="svg-search" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3059 20.5343C12.5925 20.5338 14.8132 19.8055 16.6145 18.4653L22.2776 23.8535L24.0991 22.1203L18.436 16.7321C19.8454 15.0181 20.6113 12.9047 20.6119 10.7286C20.6119 5.32194 15.9884 0.922852 10.3059 0.922852C4.6235 0.922852 0 5.32194 0 10.7286C0 16.1352 4.6235 20.5343 10.3059 20.5343ZM10.3059 3.37428C14.5687 3.37428 18.0354 6.67267 18.0354 10.7286C18.0354 14.7844 14.5687 18.0828 10.3059 18.0828C6.04314 18.0828 2.57648 14.7844 2.57648 10.7286C2.57648 6.67267 6.04314 3.37428 10.3059 3.37428Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
      </div>
    </div>
  )
}
