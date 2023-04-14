(function()
{
    let params = (new URL(document.location)).searchParams;
    if(!params.has('p'))
        return;

    let value = Number(params.get('p'));
    setIdx(value);
})();