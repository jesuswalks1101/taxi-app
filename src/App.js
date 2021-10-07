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
                    className={classNames('dropdown-item', {
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
            </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
      </div>
    </div>
  )
}
