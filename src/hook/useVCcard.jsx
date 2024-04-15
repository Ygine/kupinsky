import vCard from 'vcards-js';

export const VCcard = () => {
  const downloadTxtFile = (vcfText) => {
    const element = document.createElement('a');
    const file = new Blob([vcfText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Alisa-Kupinskaia.vcf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const CreateVCard = () => {
    let vcf = vCard();

    //set properties
    vcf.firstName = 'Alisa';
    vcf.lastName = 'Kupinskaia';
    vcf.workPhone = '4915228021236';
    vcf.birthday = new Date(1989, 3, 26);
    vcf.title = 'Produktfotografin';
    vcf.url = '/alisa-kupinskaia.com';
    vcf.note = 'Notes on Alisa';
    vcf.email = 'e.nesser@emailhost.tld';
    return vcf.getFormattedString();
  };

  return { downloadTxtFile, CreateVCard };
};
