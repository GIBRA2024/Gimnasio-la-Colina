function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Bermúdez Giraldo;Bibiana;;;
FN:Bibiana Bermúdez Giraldo
TEL: +57 3103977004
EMAIL;TYPE=WORK: bibiana.bermudez@figdesis.com
NOTE: Directora Comercial
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}