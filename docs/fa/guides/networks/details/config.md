# اطلاعات شبکه
::: warning نکته :
 تنظیمات مربوط به شبکه های لایه دو صرفا اطلاعاتی نظیر ابرک های متصل و مشخصات شبکه را در اختیار ما قرار می دهد.
:::


جزئیات مربوط به شبکه های لایه دو + سه شامل موارد زیر می باشد.

## جزئیات
### اطلاعات پیکربندی
 با ایجاد یک شبکه خصوصی از نوع روتر مجازی کاربر آی پی آدرس گیتوی خود را مشخص می کند که در این بخش می تواند آن را مشاهده نماید. آی پی آدرس ورژن 6 به صورت اتوماتیک انتخاب خواهد شد.

### IP های عمومی
به محض ایجاد شبکه خصوصی از نوع روتر مجازی و با اتصال اولین ابرک به آن، روتر مجازی به طور پیش فرض یک آی پی آدرس عمومی قابل رویت، دریافت خواهد کرد که از این آدرس به عنوان عمل Source NAT جهت برقراری ارتباط ابرک های متصل به این شبکه به خارج از شبکه استفاده خواهد شد.

<DarkModeImage
  dark-src="/images/guides/fa/dark/networks/public-ip.webp"
  light-src="/images/guides/fa/light/networks/public-ip.webp"
  alt="Public IPs"
/>


::: warning نکته :
 آی پی آدرس عمومی پیش فرض غیر قابل جداسازی و غیرقابل حذف می باشد و صرفا با حذف شبکه حذف خواهد شد.
کاربر مجاز خواهد بود توسط گزینه اتصال IP، آی پی آدرس های عمومی اضافه را به روتر مجازی خود اضافه نماید و از آنها به منظور PortForwarding و همچنین عمل Static NAT جهت انتقال تمامی ترافیک و پروتکل های خود به سمت یک ابرک با یک آدرس خاص استفاده نماید.
بعد از اتصال IP  آی پی جدید اضافه خواهد شد و در صورتی که قصد استفاده از Static NAT را نداشته باشیم می توانیم از آن در بخش های فایروال، انتقال پورت و همچنین توزیع باز استفاده نماییم.
با انتخاب افزودن استاتیک NAT جدید و انتخاب آی پی آدرسی از ابرک های موجود در مرحله بعد، تمامی ترافیک ها به سمت IP عمومی مورد نظر، به IP انتخابی از ابرک مورد نظرمنتقل خواهد شد.
:::

::: warning نکته  :
 چنانچه IP عمومی مورد نظر برای عمل استاتیک NAT استفاده شود صرفا عملیات فایروالینگ را برای آن خواهیم داشت و قادر به استفاده از آن در بخش های دیگر نخواهیم بود.
:::
