import { defineConfig } from 'vitepress'
import rtlcss from 'rtlcss'

export default defineConfig({
  // shared properties and other top-level stuff...
  lang: 'fa-IR',
  title: "Virak Cloud",
  // description: "",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // dir : '/',
  // outDir : './dist',
  // cacheDir : './',
  // assetsDir : '../../assets',
  // srcDir : './docs',
  // vue: {
  // },
  vite: {
    css: {
      postcss: {
        plugins: [
          rtlcss()
        ]
      }
    }
  },

  // markdown: {
  // https://github.com/markdown-it/markdown-it
  // },
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: 'جستجو',
                buttonAriaLabel: 'جستجو'
              },
              modal: {
                displayDetails: 'نمایش جزئیات',
                resetButtonTitle: 'پاک کردن متن جستجو',
                backButtonTitle: 'بازگشت',
                noResultsText: 'نتیجه ای برای جسنجوی شما پیدا نشد :(',
                footer: {
                  selectText: 'انتخاب کنید',
                  navigateText: 'پیمایش کنید',
                  closeText: 'بستن',
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    socialLinks: [
      {
        icon: {
          svg: `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 189.473 189.473" xml:space="preserve">
                  <g>
                    <path d="M152.531,179.476c-1.48,0-2.95-0.438-4.211-1.293l-47.641-32.316l-25.552,18.386c-2.004,1.441-4.587,1.804-6.914,0.972
                      c-2.324-0.834-4.089-2.759-4.719-5.146l-12.83-48.622L4.821,93.928c-2.886-1.104-4.8-3.865-4.821-6.955
                      c-0.021-3.09,1.855-5.877,4.727-7.02l174.312-69.36c0.791-0.336,1.628-0.53,2.472-0.582c0.302-0.018,0.605-0.018,0.906-0.001
                      c1.748,0.104,3.465,0.816,4.805,2.13c0.139,0.136,0.271,0.275,0.396,0.42c1.11,1.268,1.72,2.814,1.835,4.389
                      c0.028,0.396,0.026,0.797-0.009,1.198c-0.024,0.286-0.065,0.571-0.123,0.854L159.898,173.38c-0.473,2.48-2.161,4.556-4.493,5.523
                      C154.48,179.287,153.503,179.476,152.531,179.476z M104.862,130.579l42.437,28.785L170.193,39.24l-82.687,79.566l17.156,11.638
                      C104.731,130.487,104.797,130.533,104.862,130.579z M69.535,124.178l5.682,21.53l12.242-8.809l-16.03-10.874
                      C70.684,125.521,70.046,124.893,69.535,124.178z M28.136,86.782l31.478,12.035c2.255,0.862,3.957,2.758,4.573,5.092l3.992,15.129
                      c0.183-1.745,0.974-3.387,2.259-4.624L149.227,38.6L28.136,86.782z"/>
                  </g>
                </svg>`
        },
        link: 'https://t.me/virakcloud'
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/virakcloud/'
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/virak-cloud-a39598264/'
      }, {
        icon: 'twitter',
        link: 'https://twitter.com/virakcloud'
      },
      {
        icon: {
          svg: `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 1.594c-9.27-.003-13.913 11.203-7.36 17.758a10.403 10.403 0 0 0 17.76-7.355c0-5.744-4.655-10.401-10.4-10.403zM6.11 6.783c.501-2.598 3.893-3.294 5.376-1.103 1.483 2.19-.422 5.082-3.02 4.582A2.97 2.97 0 0 1 6.11 6.783zm4.322 8.988c-.504 2.597-3.897 3.288-5.377 1.096-1.48-2.192.427-5.08 3.025-4.579a2.97 2.97 0 0 1 2.352 3.483zm1.26-2.405c-1.152-.223-1.462-1.727-.491-2.387.97-.66 2.256.18 2.04 1.334a1.32 1.32 0 0 1-1.548 1.053zm6.198 3.838c-.501 2.598-3.893 3.293-5.376 1.103-1.484-2.191.421-5.082 3.02-4.583a2.97 2.97 0 0 1 2.356 3.48zm-1.967-5.502c-2.598-.501-3.293-3.896-1.102-5.38 2.19-1.483 5.081.422 4.582 3.02a2.97 2.97 0 0 1-3.48 2.36zM13.59 23.264l2.264.61a3.715 3.715 0 0 0 4.543-2.636l.64-2.402a11.383 11.383 0 0 1-7.448 4.428zm7.643-19.665L18.87 2.97a11.376 11.376 0 0 1 4.354 7.62l.65-2.459A3.715 3.715 0 0 0 21.231 3.6zM.672 13.809l-.541 2.04a3.715 3.715 0 0 0 2.636 4.543l2.107.562a11.38 11.38 0 0 1-4.203-7.145zM10.357.702 8.15.126a3.715 3.715 0 0 0-4.547 2.637l-.551 2.082A11.376 11.376 0 0 1 10.358.702z"/></svg>`
        },
        link: 'https://www.aparat.com/virak'
      },
    ]
  },
  locales: {
    root: {
      label: 'فارسی',
      lang: 'fa',
      link: '/fa',
      dir: 'rtl',
      title: 'ابر ویراک',
      // head: [],
      themeConfig: {
        siteTitle: 'مستندات ابر ویراک',
        // https://vitepress.dev/reference/site-config#lastupdated
        lastUpdated: {
          text: 'آخرین بروزرسانی'
        },
        nav: [

        ],
        sidebar: [{
          text: 'راهنمای استفاده',
          items: [
            { text: 'ثبت نام', link: '/fa/user/register' },
            { text: 'احراز هویت', link: '/fa/user/authentication' },
            { text: 'داشبورد', link: '/fa/dashboard' },
            {
              text: 'میزبانی زیرساخت ابری',
              items: [
                {
                  text: 'لیست ابرک ها',
                  link: '/fa/instances/list'
                },
                {
                  text: 'ایجاد ابرک ها',
                  link: '/fa/instances/create'
                },
                {
                  text: 'دیسک ها',
                  link: '/fa/instances/disk'
                }

              ],
              collapsed: true
            },
            {
              text: 'شبکه های مجازی',
              items: [
                {
                  text: 'لیست شبکه ها',
                  link: '/fa/networks/list',
                  items: [{
                    text: 'جزئیات شبکه',
                    items: [
                      {
                        text: 'پیکربندی شبکه',
                        link: '/fa/networks/details/config'
                      },
                      {
                        text: 'ابرک های متصل',
                        link: '/fa/networks/details/connected-instances'
                      },
                      {
                        text: 'فایروال های v4 , v6',
                        link: '/fa/networks/details/firewall'
                      },
                      {
                        text: 'انتقال پورت',
                        link: '/fa/networks/details/port-forward'
                      },
                      {
                        text: 'توزیع بار',
                        link: '/fa/networks/details/load-balance'
                      }, {
                        text: 'VPN',
                        link: '/fa/networks/details/vpn'
                      },
                    ],
                    collapsed: true
                  }]
                },
                {
                  text: 'نقشه شبکه',
                  link: '/fa/networks/map'
                },
                {
                  text: 'ایجاد شبکه',
                  link: '/fa/networks/create'
                }

              ],
              collapsed: true
            },
            {
              text: 'میزبانی دامنه',
              link: '/fa/dns'
            },
            {
              text: 'حسابداری و مالی',
              items: [
                {
                  text: 'لیست پرداخت ها',
                  link: '/fa/accounting/payments'
                },
                {
                  text: 'لیست تراکنش ها',
                  link: '/fa/accounting/transactions'
                },
                {
                  text: 'هدایا',
                  link: '/fa/accounting/gifts'
                },
              ],
              collapsed: true,
            },
            {
              text: 'پشتیبانی',
              items: [
                {
                  text: 'لیست درخواست ها',
                  link: '/fa/tickets/list'
                },
                {
                  text: 'ثبت درخواست جدید',
                  link: '/fa/tickets/create'
                },
                {
                  text: 'بسته های پشتیبانی',
                  link: '/fa/tickets/plans'
                },
              ],
              collapsed: true,
            },
            {
              text: 'گزارش تغییرات',
              link: '/fa/changelogs'
            }

          ],
        }],
        footer: {},
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'ltr',
      link: '/en',
      title: 'Virak Cloud',
      // head: [],
      themeConfig: {
        siteTitle: 'Virak Cloud Documents',
        // nav: [],
        sidebar: [],
        footer: {},
      }
    }
  }
})
