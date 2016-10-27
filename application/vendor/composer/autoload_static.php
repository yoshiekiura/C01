<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite576b69a62ba7caea804729c86886526
{
    public static $files = array (
        '34db133ee63d605f4b01a3475ceb7960' => __DIR__ . '/..' . '/o2system/o2gears/src/Gears.php',
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
        '0a463717c0df1c48194bc0b82a44e7b6' => __DIR__ . '/..' . '/o2system/o2glob/src/Glob.php',
        '65fec9ebcfbb3cbb4fd0d519687aea01' => __DIR__ . '/..' . '/danielstjules/stringy/src/Create.php',
        '9b8f4209f108bacffa0553ac7bfdf3f8' => __DIR__ . '/..' . '/o2system/o2curl/src/CURL.php',
        '72579e7bd17821bb1321b87411366eae' => __DIR__ . '/..' . '/illuminate/support/helpers.php',
        '6cf7a51e22fae982f4ad68611b038335' => __DIR__ . '/..' . '/steevenz/rajaongkir/src/Rajaongkir.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Component\\Translation\\' => 30,
            'Stringy\\' => 8,
        ),
        'O' => 
        array (
            'O2System\\Glob\\' => 14,
            'O2System\\Gears\\' => 15,
            'O2System\\CURL\\' => 14,
        ),
        'I' => 
        array (
            'Illuminate\\Support\\' => 19,
            'Illuminate\\Database\\' => 20,
            'Illuminate\\Contracts\\' => 21,
            'Illuminate\\Container\\' => 21,
        ),
        'C' => 
        array (
            'Carbon\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Component\\Translation\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/translation',
        ),
        'Stringy\\' => 
        array (
            0 => __DIR__ . '/..' . '/danielstjules/stringy/src',
        ),
        'O2System\\Glob\\' => 
        array (
            0 => __DIR__ . '/..' . '/o2system/o2glob/src',
        ),
        'O2System\\Gears\\' => 
        array (
            0 => __DIR__ . '/..' . '/o2system/o2gears/src',
        ),
        'O2System\\CURL\\' => 
        array (
            0 => __DIR__ . '/..' . '/o2system/o2curl/src',
        ),
        'Illuminate\\Support\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/support',
        ),
        'Illuminate\\Database\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/database',
        ),
        'Illuminate\\Contracts\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/contracts',
        ),
        'Illuminate\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/illuminate/container',
        ),
        'Carbon\\' => 
        array (
            0 => __DIR__ . '/..' . '/nesbot/carbon/src/Carbon',
        ),
    );

    public static $prefixesPsr0 = array (
        'D' => 
        array (
            'Doctrine\\Common\\Inflector\\' => 
            array (
                0 => __DIR__ . '/..' . '/doctrine/inflector/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite576b69a62ba7caea804729c86886526::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite576b69a62ba7caea804729c86886526::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInite576b69a62ba7caea804729c86886526::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}