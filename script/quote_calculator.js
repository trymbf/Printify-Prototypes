const quote_result_div = document.getElementById('quote-result-div');
const quote_result = document.getElementById('quote-result');
const contact_button = document.getElementById('contact-quote-button');

const single_prototype_button = document.getElementById('single-prototype-button');
const complexity_quote_div = document.getElementById('how-complex-div');

const multiple_prototype_button = document.getElementById('multiple-prototype-button');
const package_size_div = document.getElementById('package-size-div');

const simple_prototype_button = document.getElementById('simple-prototype-button');
const detailed_prototype_button = document.getElementById('mid-prototype-button');
const complex_prototype_button = document.getElementById('complex-prototype-button');

const fusion_modeling_button = document.getElementById('fusion-modeling-button');

const small_package_button = document.getElementById('small-package-button');
const medium_package_button = document.getElementById('medium-package-button');
const large_package_button = document.getElementById('large-package-button');

const what_div = document.getElementById('what-div');

var service = "";

fusion_modeling_button.addEventListener('click', function() {
    hideAll();
    fusion_modeling_button.classList.add('selected'); // Add 'selected' class
    quote_result.innerHTML = '300 - 500 NOK/hour';
    service = "Modeling in Fusion";
    showQuoteResult();
});

single_prototype_button.addEventListener('click', function() {
    hideAll();
    complexity_quote_div.style.display = 'block';
    single_prototype_button.classList.add('selected'); // Add 'selected' class
});

multiple_prototype_button.addEventListener('click', function() {
    hideAll();
    package_size_div.style.display = 'block';
    multiple_prototype_button.classList.add('selected'); // Add 'selected' class
});

function showQuoteResult() {
    quote_result_div.style.display = 'block';
    contact_button.style.display = 'block';
    what_div.scrollIntoView({ behavior: 'smooth' });
}

simple_prototype_button.addEventListener('click', function() {
    hideAll();
    single_prototype_button.classList.add('selected'); // Toggle 'selected' class
    simple_prototype_button.classList.add('selected'); // Toggle 'selected' class
    complexity_quote_div.style.display = 'block';
    quote_result.innerHTML = '1 500 - 2 500 NOK';
    service = "Simple single Prototype";
    showQuoteResult();

});

detailed_prototype_button.addEventListener('click', function() {
    hideAll();
    single_prototype_button.classList.add('selected'); // Toggle 'selected' class
    detailed_prototype_button.classList.add('selected'); // Toggle 'selected' class
    complexity_quote_div.style.display = 'block';
    quote_result.innerHTML = '5 000 - 8 000 NOK';
    service = "Detailed single Prototype";
    showQuoteResult();
});

complex_prototype_button.addEventListener('click', function() {
    hideAll();
    single_prototype_button.classList.add('selected'); // Toggle 'selected' class
    complex_prototype_button.classList.add('selected'); // Toggle 'selected' class
    complexity_quote_div.style.display = 'block';
    quote_result.innerHTML = '12 000 - 15 000 NOK';
    service = "Complex single Prototype";
    showQuoteResult();
});

small_package_button.addEventListener('click', function() {
    hideAll();
    multiple_prototype_button.classList.add('selected'); // Toggle 'selected' class
    small_package_button.classList.add('selected'); // Toggle 'selected' class
    package_size_div.style.display = 'block';
    quote_result.innerHTML = '1 500 NOK/month';
    service = "Small package subscription";
    showQuoteResult();
});

medium_package_button.addEventListener('click', function() {
    hideAll();
    multiple_prototype_button.classList.add('selected'); // Toggle 'selected' class
    medium_package_button.classList.add('selected'); // Toggle 'selected' class
    package_size_div.style.display = 'block';
    quote_result.innerHTML = '4 500 NOK/month';
    service = "Medium package subscription";
    showQuoteResult();
});

large_package_button.addEventListener('click', function() {
    hideAll();
    multiple_prototype_button.classList.add('selected'); // Toggle 'selected' class
    large_package_button.classList.add('selected'); // Toggle 'selected' class
    package_size_div.style.display = 'block';
    quote_result.innerHTML = '12 000 NOK/month';
    service = "Large package subscription";
    showQuoteResult();
});

function hideAll() {
    complexity_quote_div.style.display = 'none';
    package_size_div.style.display = 'none';
    quote_result_div.style.display = 'none';
    contact_button.style.display = 'none';
    single_prototype_button.classList.remove('selected'); 
    multiple_prototype_button.classList.remove('selected'); 
    simple_prototype_button.classList.remove('selected'); 
    detailed_prototype_button.classList.remove('selected'); 
    complex_prototype_button.classList.remove('selected'); 
    fusion_modeling_button.classList.remove('selected'); 
    small_package_button.classList.remove('selected'); 
    medium_package_button.classList.remove('selected'); 
    large_package_button.classList.remove('selected'); 
}

contact_button.addEventListener('click', function() {
    const subject = encodeURIComponent(`Order of '${service}'`);
    const body = encodeURIComponent(`Your quote is: ${quote_result.innerText}`);
    const mailtoLink = `mailto:Printify.UB@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});

const buttons = document.querySelectorAll('.quote-question-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        const popup = this.querySelector('.popup');
        const rect = popup.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        if (rect.right > viewportWidth) {
            popup.style.left = 'auto';
            popup.style.right = '0';
            popup.style.marginLeft = '0';
        } else if (rect.left < 0) {
            popup.style.left = '0';
            popup.style.right = 'auto';
            popup.style.marginLeft = '0';
        } else {
            popup.style.left = '50%';
            popup.style.right = 'auto';
            popup.style.marginLeft = '-100px';
        }
    });

    button.addEventListener('mouseleave', function() {
        const popup = this.querySelector('.popup');
        popup.style.left = '50%';
        popup.style.right = 'auto';
        popup.style.marginLeft = '-100px';
    });
});