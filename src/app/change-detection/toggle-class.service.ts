export function toggleClass(el:any, zone:any, className:any = 'checked') {
    const a = el.nativeElement.querySelector('.block');
    a.classList.add(className);
    zone.runOutsideAngular(() => {
        setTimeout(() => {
            a.classList.remove(className);
        }, 500);
    });
}
