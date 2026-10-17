const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

if (toggle && navigation) {
  const mobile = matchMedia('(max-width: 760px)');
  const setOpen = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.hidden = mobile.matches && !open;
    if (restoreFocus) toggle.focus();
  };
  const syncLayout = () => {
    toggle.hidden = !mobile.matches;
    setOpen(false, mobile.matches && navigation.contains(document.activeElement));
  };

  syncLayout();
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a') && mobile.matches) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false, true);
    }
  });
  document.addEventListener('click', event => {
    if (mobile.matches && !event.target.closest('.site-header')) setOpen(false);
  });
  mobile.addEventListener('change', syncLayout);
}
