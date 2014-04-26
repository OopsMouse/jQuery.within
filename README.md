# jQuery.within

Resize the image set by `<img>` element to within square area, while maintaining the aspect ratio.  
Corresponding to the image of both portrait and landscape.

## Inscribed resize
Adjusted to the longer sides of the vertical or horizontal in the "inscribed resize", the entire image is displayed in the area, the missing parts are supplemented with the background color.

## Circumscribed resize
Adjusted to the shorter of the vertical or horizontal in the "circumscribed resize", in which the image is displayed on the entire area, the part that stick out are omitted.

# Usage

Use the plug-in by two steps.

## 1.Load the source code

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="jquery.within-1.0.min.js"></script>

Load the source code of jQuery, and this plugin.

## 2.Execute
You can choose in two ways. One is to run as a jQuery method in the `<script>` element. Another one is set `data` attribute to, `<img>` element.

### To run as a jQuery method

    <script>
      jQuery(function($){
        var ops = {
          width: 200,
          type : 'cover',
          bgColor : '#ccc'
        };

        $('img.within').within(ops);
      });
    </script>

#### Options

|name    |type   |default |description                              |
:-----   |:----- |:-----  |:-----                                   |
|width   |number |100     |size of image.                           |
|type    |string |contain |resize mode option. `contain` or `cover` |
|bgColor |string |#333    |background color of inscribed resize.    |

First, select the target image by `$()` function, then use `within()` function with your options.  
All options can be omit to use default values.

#### Shorthand

    $('img.foo').within(200);
    $('img.foo').within(200,'cover','#ccc');

It is also possible to simplify the specification of options in the following way. However, you should be aware of the order of the arguments.

### Execute by data attributes

    <img src="foo.jpg" data-within="200,cover,#ccc">
    <img src="foo.jpg" data-within>

If you want to don't write the javascript code, should add the `data-within` attribute to `<img>` element. When load the document, plugin will be run automatically.


## Attributes inheritance
When this plugin is run will be delete original `<img>` element. Then create the new `<span>` element. While `id` and `class` attributes inherit to new element from original element.