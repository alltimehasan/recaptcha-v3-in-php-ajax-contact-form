reCaptcha v3 in PHP AJAX Contact Form
============

This is very simple contact form using reCaptcha v3

This form will work for PHP 7 or higher

Installation
============

You have to clone this repository

```
git clone https://github.com/alltimehasan/recaptcha-v3-in-php-ajax-contact-form.git
```

You have to install PHPMailer using composer in the root directory

```
composer install
```

Usage
=====

You have to add your google reCaptcha V3 site key in the index.html file at line No. 29

```html

<script src="https://www.google.com/recaptcha/api.js?render=site_key"></script>

```

You have to add your google reCaptcha V3 site key in the js/contact-form.js file at line No. 27

```js

grecaptcha.execute('site_key', {action: 'submit'}).then(function(token) {

```

You have to add your google reCaptcha V3 secret key in the process/process-contact.php file at line No. 54

```php

define('SECRET_KEY', 'secret_key');

```

You have to add your domain name in the process/process-contact.php file at line No. 115

```php

$mail->setFrom('noreply@yourdomain.com', 'Company Name');

```

You have to add a email address where the form data will go, in the process/process-contact.php file at line No. 119

```php

$mail->addAddress('youremail@domain.com');

```