/* Send click event to Google Analytics via custom attribute tags
 * @param  {Object} e Event object
 */

document.addEventListener('click', (e) => {
    // check that our element has the tracking class, return early if it doesn't
    if (!e.target.classList.contains('click-tracking-ga')) {
        return;
    }
    //use the gtag function passing the event target elements attribute tag we generated on the HTML
    //the 'data-ga-id' will be the same name you use in GA to flag these clicks
    //pass the action as 'Clicked', can be whatever you set up but that is descriptive
    gtag('event',
        'clicks', {
            event_category: `${e.target.getAttribute('data-ga-id')}`,
            event_action: 'Clicked'
        });
});