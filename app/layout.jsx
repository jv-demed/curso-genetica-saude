import '@/styles/globals.css';

export const metadata = {
    description: '',
    title: 'Genética e Saúde de Precisão',
};

export default function RootLayout({ children }){
    return (
        <html lang='pt-br'>
            <body>
                {children}
            </body>
        </html>
    );
}