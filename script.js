
// Target Result Text
var resultText = document.querySelector("#resultText");
var nameInput = document.querySelector("#nameInput");

// Targeted Left Side Input Controls.
var fontFamilyInput = document.querySelector("#fontFamilyInput");
var fontSizeInput = document.querySelector("#fontSizeInput");
var fontWeightInput = document.querySelector("#fontWeightInput");
var fontIsItalic = document.querySelector("#fontIsItalic");
var fontIsUnderline = document.querySelector("#fontIsUnderline");
var fontRotateDegree = document.querySelector("#fontRotateDegree");

// Targeted Right Side Input Controls.
var fontColor = document.querySelector("#fontColor");
var fontBackgroundColor = document.querySelector("#fontBackgroundColor");
var fontShadowSize = document.querySelector("#fontShadowSize");
var fontShadowColor = document.querySelector("#fontShadowColor");
var fontBorderSize = document.querySelector("#fontBorderSize");
var fontBorderColor = document.querySelector("#fontBorderColor");



// Event Functions
fontFamilyInput.addEventListener('change', 
    function() {  
        resultText.style.fontFamily = fontFamilyInput.value;
    }
)  
fontSizeInput.addEventListener('change', 
    function() {  
        resultText.style.fontSize = fontSizeInput.value + 'px';
    }
)
fontWeightInput.addEventListener('change', 
    function() {  
        resultText.style.fontWeight = fontWeightInput.value;
    }
)
fontIsItalic.addEventListener('change', 
    function() {  
        if ( fontIsItalic.checked == true ) {
            resultText.style.fontStyle = 'italic';
        }else{
            resultText.style.fontStyle = 'normal';
        }
    }
)
fontIsUnderline.addEventListener('change', 
    function() {  
        if ( fontIsUnderline.checked == true ) {
            resultText.style.textDecoration = 'underline';
        }else{
            resultText.style.textDecoration = 'none';
        }
    }
)
fontRotateDegree.addEventListener('change', 
    function() {  
        resultText.style.transform = `rotate(${fontRotateDegree.value}deg)` ;
    }
)


fontColor.addEventListener('change', 
    function() {  
        resultText.style.color = fontColor.value;
    }
)
fontBackgroundColor.addEventListener('change', 
    function() {  
        resultText.style.backgroundColor = fontBackgroundColor.value;
    }
)
fontShadowSize.addEventListener('change', 
    function() {  
        if ( fontShadowSize.value ) {
            var finalfontShadowSize = fontShadowSize.value;
        } else {
            var finalfontShadowSize = '5';
        }
        
        if ( fontShadowColor.value ) {
            var finalFontShadowColor = fontShadowColor.value;
        } else {
            var finalFontShadowColor = '#000';
        }
        
        var combinnedFontShadowProperties = finalfontShadowSize+'px '+ finalfontShadowSize+'px '+ finalfontShadowSize+'px '+ finalFontShadowColor;

        resultText.style.textShadow = combinnedFontShadowProperties;
    }
)

fontShadowColor.addEventListener('change', 
    function() {  
        if ( fontShadowSize.value ) {
            var finalfontShadowSize = fontShadowSize.value;
        } else {
            var finalfontShadowSize = '5';
        }
        
        if ( fontShadowColor.value ) {
            var finalFontShadowColor = fontShadowColor.value;
        } else {
            var finalFontShadowColor = '#000';
        }
        
        var combinnedFontShadowProperties = finalfontShadowSize+'px '+ finalfontShadowSize+'px '+ finalfontShadowSize+'px '+ finalFontShadowColor;

        resultText.style.textShadow = combinnedFontShadowProperties;
    }
)

fontBorderSize.addEventListener('change', 
    function() {  
        if ( fontBorderSize.value ) {
            var finalFontBorderSize = fontBorderSize.value;
        } else {
            var finalFontBorderSize = '2';
        }
        
        if ( fontBorderColor.value ) {
            var finalFontBorderColor = fontBorderColor.value;
        } else {
            var finalFontBorderColor = '#000';
        }
        
        var combinnedFontBorderProperties = finalFontBorderSize+'px' + ' solid ' +  finalFontBorderColor;

        resultText.style.border = combinnedFontBorderProperties;
    }
)
fontBorderColor.addEventListener('change', 
    function() {  
        if ( fontBorderSize.value ) {
            var finalFontBorderSize = fontBorderSize.value;
        } else {
            var finalFontBorderSize = '2';
        }
        
        if ( fontBorderColor.value ) {
            var finalFontBorderColor = fontBorderColor.value;
        } else {
            var finalFontBorderColor = '#000';
        }
        
        var combinnedFontBorderProperties = finalFontBorderSize+'px' + ' solid ' +  finalFontBorderColor;

        resultText.style.border = combinnedFontBorderProperties;
    }
)

nameInput.addEventListener('change', 
    function() {  
        resultText.textContent = nameInput.value;
    }
)  

