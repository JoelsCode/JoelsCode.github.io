var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
    render: function () {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true

        };
        return (
            <Slider {...settings}>
                <img src="Angular.png" alt=""/>

                <img src="bootstrap.png" alt=""/>

                <img src="css.png" alt=""/>

                <img src="es6.png" alt=""/>

                <img src="git.png" alt=""/>

                <img src="html.png" alt=""/>

                <img src="js.png" alt=""/>

                <img src="react.png" alt=""/>

            </Slider>
        );
    }
});


export default SimpleSlider;