import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/documents.css'; // Asegúrate de importar el archivo CSS

// Se utiliza un objeto para almacenar el contenido de cada documento legal
const documents = {
    'terminos-y-condiciones': {
        title: 'Términos y Condiciones',
        content: `
        <h2>BIENVENIDO AL SITIO WEB DE AVANA LEATHER.</h2>
        <p>La venta a distancia de productos de la marca Avana Leather a través de este sitio web se rige por los siguientes Términos y Condiciones. Por favor, lea detenidamente los siguientes términos y condiciones de uso antes de utilizarlo.</p>
        
        <h3>1. ACEPTACIÓN DE TÉRMIMOS Y CONDICIONES</h3>
        <p>Al acceder, navegar y/o usar este sitio, el usuario admite haber leído y entendido estos Términos de Uso y estar de acuerdo en sujetarse a los mismos y cumplir con todas las leyes y regulaciones aplicables. Avana Leather no se responsabiliza de que el material en este Sitio sea apropiado o esté disponible para su uso en otros lugares, estando prohibido su acceso desde territorios donde su contenido sea ilegal. En caso de que el usuario no esté de acuerdo con estos términos, favor abstenerse de usar este Sitio. Estos términos y condiciones están sujetos a cambios sin previo aviso en cualquier momento, bajo el principio de autonomía de la voluntad.</p>
        
        <h3>2. PROCESO DE COMPRA</h3>
        <p>2.1. Cada Producto ofrecido para la venta en el Sitio Web puede verse siguiendo un enlace dedicado que muestra las imágenes, el precio unitario y los colores. Luego de ello, el producto se puede adicionar a su "Carrito de compras".</p>
        <p>2.2. Los Productos seleccionados por el cliente pasarán a una sección especial denominada "Carrito de la Compra".</p>
        <p>2.3. Contamos con una unica opcion para realizar la compra: compra rápida
        <ol>
            <li>La "Compra rápida" solicita datos personales, método de envío y método de pago.</li>
        </ol>
        <p>2.4. Antes de confirmar el pedido, el cliente debe comprobar la exactitud del contenido del carrito y rellenar el formulario de pedido.</p>
        <p>2.5. El proceso de compra se completa tan pronto como el cliente pulsa el botón de confirmación final, validando así su pedido, que se remitirá directamente a Avana Leather. Después de este paso, el cliente no podrá modificar el contenido del pedido.</p>
        <p>2.6. El proceso de compra debe completarse totalmente, de lo contrario el pedido no se podrá enviar.</p>
        <p>2.7. Cada pedido y los datos del cliente serán almacenados por Avana Leather durante el periodo de tiempo previsto en las leyes aplicables.</p>
        <p>2.8. El Cliente es responsable de la exactitud y veracidad de cualquier dato introducido en el Sitio Web.</p>
        
        <h3>3. POLÍTICA DE PRIVACIDAD</h3>
        <p>Avana Leather se compromete a proteger la información que es proporcionada por los usuarios. Al solicitarle información personal, aseguramos que solo se empleará de acuerdo con los términos de este documento.</p>
        <p>3.1 Información</p>
        <p>Podemos recoger información personal como: Nombre, información de contacto (dirección de correo, teléfono) e información demográfica. También se puede requerir información específica para procesar pedidos, entregas o facturación. Esta información no será compartida con terceros.</p>
        <p>3.2 Uso de la información recogida</p>
        <p>La información se emplea para proporcionar el mejor servicio posible, mantener un registro de usuarios y pedidos, y mejorar nuestros productos. Es posible que enviemos correos electrónicos con ofertas especiales y nuevos productos, que podrán ser cancelados en cualquier momento por el usuario.</p>
        <p>3.3 Control de la información personal</p>
        <p>Avana Leather no venderá, cederá ni distribuirá la información personal recopilada sin su consentimiento, a menos que sea requerido por un juez. Nos reservamos el derecho de cambiar esta Política de Privacidad en cualquier momento.</p>
        
        <h3>4. ERRORES SISTEMÁTICOS</h3>
        <p>En el caso en que un producto aparezca con un precio incorrecto debido a un error tipográfico o de sistema, Avana Leather tendrá derecho a denegar o cancelar cualquier orden. El error será comunicado al cliente y se aplicará la política de devoluciones o cambios.</p>
        
        <h3>5. DERECHOS DE AUTOR</h3>
        <p>Reservamos todos los derechos de todas las imágenes, diseño del sitio, ilustraciones y gráficos, los cuales son propiedad de Avana Leather. El contenido del sitio solo podrá ser usado para propósitos de uso personal, no comerciales.</p>
        
        <h3>6. COLORES</h3>
        <p>Se realiza un esfuerzo para que las prendas se muestren de la forma más cercana a la realidad. No obstante, el color de los artículos que aparece en pantalla están sujetos a variaciones dependiendo de la calidad del monitor del computador o dispositivos móvil.</p>
        
        <h3>7. PAGOS</h3>
        <p>Nuestra tienda cuenta con una plataforma segura para realizar pagos online. Se aceptan pagos con tarjetas de crédito, débito y otras pasarelas de pago vigentes.</p>
        `,
    },
    'politica-de-privacidad': {
        title: 'Política de Privacidad',
        content: `
        <h2>POLÍTICA DE PRIVACIDAD DE DATOS</h2>
        <p>En **Avana Leather**, nos comprometemos a proteger y respetar su privacidad. Esta política establece la base sobre la cual procesaremos cualquier dato personal que nos proporcione.</p>
        <h3>1. Información que recopilamos</h3>
        <p>Podemos recopilar y procesar los siguientes datos sobre usted:</p>
        <ul>
            <li>**Información personal** que nos proporciona al llenar formularios en nuestro sitio web. Esto incluye su nombre, dirección de correo electrónico, dirección de envío y facturación, y número de teléfono.</li>
            <li>**Detalles de sus transacciones** y del cumplimiento de sus pedidos.</li>
            <li>**Correspondencia** y registros de cualquier contacto que tengamos con usted.</li>
        </ul>
        <h3>2. Uso de su información personal</h3>
        <p>Utilizamos la información que tenemos sobre usted de las siguientes maneras:</p>
        <ul>
            <li>Para procesar y gestionar sus pedidos y pagos.</li>
            <li>Para notificarle sobre cambios en nuestros productos o servicios.</li>
            <li>Para asegurarnos de que el contenido de nuestro sitio se presenta de la manera más efectiva para usted.</li>
            <li>Para enviarle información sobre promociones, nuevos productos y ofertas especiales que creemos que le pueden interesar, siempre que usted haya dado su consentimiento.</li>
        </ul>
        <h3>3. Divulgación de su información</h3>
        <p>No venderemos, distribuiremos o cederemos su información personal a terceros a menos que tengamos su permiso o estemos legalmente obligados a hacerlo. Podemos divulgar su información a:</p>
        <ul>
            <li>Empresas de transporte para la entrega de su pedido.</li>
            <li>Procesadores de pagos para completar su transacción de forma segura.</li>
        </ul>
        <p>Nos reservamos el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento. Le notificaremos sobre cualquier cambio sustancial a través de nuestro sitio web.</p>
        `,
    },
    'politica-de-reembolso': {
        title: 'Política de Reembolso',
        content: `
        <h2>POLÍTICA DE REEMBOLSO Y DEVOLUCIONES</h2>
        <p>En **Avana Leather**, su satisfacción es nuestra prioridad. Si no está completamente satisfecho con su compra, le ofrecemos un proceso de reembolso claro y sencillo.</p>
        <h3>1. Condiciones para la devolución</h3>
        <p>Tiene un plazo de **5 días hábiles** a partir de la fecha de entrega para solicitar una devolución. El producto debe estar en su estado original, sin usar, con todas las etiquetas y embalajes intactos.</p>
        <h3>2. Proceso de solicitud</h3>
        <p>Para iniciar un proceso de reembolso, por favor, envíe su solicitud a nuestro equipo de servicio al cliente a través de nuestro correo electrónico (avanaleather@gmail.com). La solicitud debe incluir su número de pedido y el motivo de la devolución.</p>
        <h3>3. Reembolso</h3>
        <p>Una vez que recibamos y revisemos el artículo devuelto, le enviaremos un correo electrónico para notificarle que hemos recibido su artículo. También le notificaremos sobre la aprobación o rechazo de su reembolso. Si es aprobado, su reembolso será procesado y se aplicará un crédito automáticamente a su método de pago original en un plazo máximo de **30 días hábiles**.</p>
        <h3>4. Costos de envío</h3>
        <p>Los costos de envío originales no son reembolsables. Usted será responsable de pagar los costos de envío para devolver el artículo. Si el reembolso es por un defecto de fábrica, nosotros cubriremos el costo de envío de la devolución.</p>
        `,
    },
    'politica-de-envio': {
        title: 'Política de Envío',
        content: `
        <h2>POLÍTICA DE ENVÍOS</h2>
        <p>En **Avana Leather**, nos esforzamos por garantizar que su pedido llegue a usted de manera segura y oportuna.</p>
        <h3>1. Tiempos de entrega</h3>
        <p>Los tiempos de entrega comienzan a contar a partir de la confirmación del pago. Los plazos estimados son:</p>
        <ul>
            <li>**Ciudades principales:** Máximo **4 días hábiles**.</li>
            <li>**Otras ciudades y áreas rurales:** Máximo **6 días hábiles**.</li>
        </ul>
        <p>Tenga en cuenta que los tiempos de entrega pueden variar debido a condiciones climáticas, eventos de fuerza mayor o bloqueos en las vías.</p>
        <h3>2. Costos de envío</h3>
        <p>El envío es **GRATIS** para compras superiores a **$300.000**. Para pedidos de menor valor, el costo de envío será calculado al momento de la compra, en función de su ubicación.</p>
        <h3>3. Seguimiento de su pedido</h3>
        <p>Una vez que su pedido sea enviado, recibirá un correo electrónico de confirmación con un número de seguimiento para que pueda rastrear el estado de su entrega en línea.</p>
        <h3>4. En caso de no recibir el pedido</h3>
        <p>Si no recibe su pedido en los tiempos estipulados o si el paquete llega dañado, por favor, contáctenos de inmediato a través de nuestro correo electrónico o número de WhatsApp para que podamos resolver el problema de la mejor manera posible.</p>
        `,
    },
    'garantia-y-devoluciones': {
        title: 'Garantía y Devoluciones',
        type: 'warranty', // Tipo para un diseño de tabla específico
        content: `
        <h2>POLÍTICAS DE GARANTÍA</h2>
        <p>Gracias por elegir un producto Avana Leather. Cada bolso ha sido elaborado con dedicación y maestría, cuidando cada detalle para brindarte calidad, estilo y durabilidad.</p>
        <p>Recuerda que para realizar cualquier solicitud de cambio y garantía deberás tener en cuenta el siguiente horario y días hábiles:</p>
        <p>De Lunes a Viernes (Días Hábiles) de 10:00 AM a 5:00 PM. Estos horarios y días aplican para realizar cambio en tienda física o presencial.</p>
        <p>Avana Leather cuenta con diferentes tiempos de garantías, dependiendo del tipo de producto:</p>
        <table>
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>TIEMPO DE GARANTÍA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bolsos y complementos de cartera</td>
                    <td>60 días</td>
                </tr>
                <tr>
                    <td>Accesorios</td>
                    <td>3 días</td>
                </tr>
                <tr>
                    <td>Productos en promoción</td>
                    <td>5 días</td>
                </tr>
                <tr>
                    <td>Ventas al por mayor</td>
                    <td>10 días</td>
                </tr>
            </tbody>
        </table>
        <p>* No se realiza devoluciones de dinero por ningún concepto.</p>
        <p>* Tiempos internos de garantía: la empresa contará con un plazo de 30 días calendario después de recibir el producto para dar una solución a la solicitud.</p>
        
        <h3>GARANTÍA DE CALIDAD</h3>
        <p>Tu bolso cuenta con una garantía de **3 meses** a partir de la fecha de compra, que cubre defectos de fabricación en costuras, herrajes y materiales.</p>

        <p>Esta garantía NO CUBRE:</p>
        <ul>
            <li>Daños por mal uso, humedad, golpes, manchas o exposición prolongada al sol.</li>
            <li>Rasgaduras por sobrepeso o contacto con sustancias abrasivas.</li>
            <li>Desgaste natural del cuero por el paso del tiempo.</li>
        </ul>
        
        <h3>CONDICIONES DE GARANTÍA</h3>
        <ul>
            <li>Factura de compra o cédula del comprador.</li>
            <li>Vigencia de la garantía. La garantía comienza a regir desde el momento de compra, determinado por la fecha de la factura.</li>
        </ul>
        
        <h3>BOLSOS Y COMPLEMENTOS DE CARTERA</h3>
        <p>Los bolsos no deben presentar cambios o modificaciones de su estado natural para hacer efectiva la garantía. No son motivos de Garantía:</p>
        <ul>
            <li>Rasgones, raspones, ruptura de materiales.</li>
            <li>Los cambios en el color, tonalidad y texturas que sean naturales del material.</li>
        </ul>
        
        <h3>Para realizar una solicitud de garantía se podrán utilizar los siguientes medios:</h3>
        <ul>
            <li>Contactarse con la línea de Servicio al cliente de Avana Leather al 322 510 9005 (en horario de lunes a viernes de 8:00 am a 5:30 pm).</li>
            <li>A través de nuestro correo avanaleather@gmail.com.</li>
        </ul>
        `,
    },
    'informacion-de-contacto': {
        title: 'Información de Contacto',
        type: 'contact', // Tipo para un diseño de tarjetas
        content: [
            {
                icon: 'fas fa-phone-alt',
                title: 'Llámanos',
                value: '+57 322 510 9005',
                link: 'tel:+573225109005'
            },
            {
                icon: 'fab fa-whatsapp',
                title: 'Escríbenos por WhatsApp',
                value: '+57 322 510 9005',
                link: 'https://wa.me/573225109005'
            },
            {
                icon: 'fas fa-envelope',
                title: 'Correo Electrónico',
                value: 'avanaleather@gmail.com',
                link: 'mailto:avanaleather@gmail.com'
            },
            {
                icon: 'fab fa-instagram',
                title: 'Síguenos en Instagram',
                value: '@avanaleather',
                link: 'https://www.instagram.com/avanaleather/'
            }
        ]
    },
    'cuidados-productos': {
        title: 'Cuidados para tus productos',
        type: 'care',
        content: {
            intro: 'Para conservar su apariencia y suavidad, es importante tratar tu bolso con esmero, empleando los productos y cuidados adecuados.',
            list: [
                'Limpia tu producto regularmente con un paño seco y suave.',
                'Hidrata el cuero cada 3 meses con un acondicionador especializado.',
                'Evita el contacto prolongado con el sol, la humedad o el calor intenso.',
                'Guarda tu producto en una bolsa antipolvo, en un lugar fresco y seco cuando no lo utilices.',
                'Protege tu artículo de objetos punzantes o abrasivos.',
            ],
            cta: '¿Necesitas ayuda con tu cuidado?',
            contactEmail: 'avanaleather@gmail.com'
        }
    },
    'preguntas-frecuentes': {
        title: 'Preguntas Frecuentes',
        type: 'faq',
        content: [
            {
                question: '¿Cómo puedo rastrear mi pedido?',
                answer: 'Una vez que tu pedido sea enviado, recibirás un correo electrónico de confirmación con un número de seguimiento. Puedes usar este número en el sitio web de la transportadora para conocer el estado de tu entrega.'
            },
            {
                question: '¿Qué métodos de pago aceptan?',
                answer: 'Aceptamos pagos con tarjetas de crédito, débito y otras pasarelas de pago seguras para garantizar una compra fácil y protegida.'
            },
            {
                question: '¿Cuál es el tiempo de garantía de los productos?',
                answer: 'La garantía de los bolsos y complementos de cartera es de 60 días, mientras que para los relojes es de 180 días por maquinaria. Te invitamos a revisar nuestra sección de "Garantía y devoluciones" para más detalles sobre cada categoría de producto.'
            },
            {
                question: '¿Puedo devolver un producto?',
                answer: 'Sí, tienes un plazo de 5 días hábiles a partir de la fecha de entrega para solicitar una devolución, siempre y cuando el producto esté en su estado original, sin usar, con todas las etiquetas y embalajes intactos.'
            },
            {
                question: '¿Cómo puedo contactar con el servicio al cliente?',
                answer: 'Puedes contactarnos a través de nuestra línea de WhatsApp, correo electrónico o por medio de nuestra cuenta de Instagram. Visita nuestra sección de "Información de contacto" para conocer todos nuestros canales de atención.'
            }
        ]
    },
    'nosotros': {
        title: 'Nosotros',
        type: 'about',
        content: `
        <div class="about-container">
            <div class="about-header">
                <h2>Nuestra Historia</h2>
                <h3>El Arte del Cuero, Un Legado Familiar</h3>
            </div>
            <div class="about-content">
                <p>Avana Leather nace del sueño de honrar la tradición y convertirla en estilo. Somos una marca colombiana con raíces en <strong>Belén, Nariño</strong>, tierra reconocida por su cultura artesanal y su amor por el trabajo manual. Hace dos años decidimos transformar este legado en una empresa que combina tradición, diseño y modernidad.</p>
                
                <p>Nuestra historia comienza mucho antes de la creación de la marca. El arte del cuero ha estado presente en nuestra familia por generaciones: un conocimiento transmitido de padres a hijos, donde la dedicación, la paciencia y el respeto por el oficio han sido siempre la base. Nuestro fundador creció viendo a su padre trabajar el cuero con maestría, aprendiendo que cada corte y cada puntada cuentan una historia.</p>
                
                <p>En <strong>Belén</strong>, la tradición del cuero es parte de la identidad cultural. El trabajo marroquinero no solo genera sustento, sino que también representa un arte que ha vestido y acompañado a los colombianos a lo largo del tiempo. Por eso, en Avana Leather no solo fabricamos bolsos: damos vida a piezas que conectan con nuestras raíces y celebran la riqueza de nuestra tierra.</p>
                
                <p>Seleccionamos únicamente los <strong>mejores materiales</strong>, cuidando cada detalle en el proceso de diseño y producción. Cada bolso es hecho a mano, asegurándonos de que sea único, resistente y con un acabado impecable. Para nosotros, un bolso no es un accesorio pasajero: es un compañero de vida que refleja autenticidad y estilo.</p>
                
                <p>Avana es más que moda: es un legado familiar que se renueva en cada creación. Creemos en producir de manera consciente, en pequeña escala, para garantizar exclusividad y reducir nuestro impacto en el medio ambiente. Así, cada pieza no solo lleva nuestra historia, sino también un compromiso con el futuro.</p>
                
                <p>Hoy, más de 100 mujeres llevan en sus manos un pedacito de nuestra esencia. Con cada bolso, seguimos escribiendo una historia que comenzó en Belén y que ahora queremos compartir contigo: la experiencia Avana.</p>
            </div>
            <div class="about-image-container">
                <img src="https://i.pinimg.com/736x/9f/00/6f/9f006f982c4cad9c362162dc49a4957b.jpg" alt="Taller de Avana Leather" class="about-image"/>
            </div>
        </div>
        `
    }
};

// Componente para mostrar documentos legales
const LegalDocument = ({ docName }) => {
    const [isLoading, setIsLoading] = useState(true);
    const doc = documents[docName];

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Simula un tiempo de carga
        return () => clearTimeout(timer);
    }, [docName]);

    if (!doc) {
        return (
            <div className="document-container">
                <div className="document-content">
                    <h1 className="not-found-title">Documento no encontrado</h1>
                    <p className="not-found-text">Lo sentimos, el documento legal que buscas no existe.</p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="document-container loading">
                <div className="spinner"></div>
                <p className="loading-text">Cargando documento...</p>
            </div>
        );
    }

    return (
        <div className="document-container">
            <div
                className="document-content"
                dangerouslySetInnerHTML={{ __html: doc.content }}
            />
        </div>
    );
};

// Componente para la sección de Información de Contacto
const ContactInfo = ({ content }) => (
    <div className="document-container contact-info-container">
        <h2>Nuestros canales de atención:</h2>
        <p className="contact-intro">Estamos aquí para ayudarte. No dudes en contactarnos si tienes alguna pregunta o inquietud sobre tu pedido o nuestros productos.</p>
        <div className="contact-cards">
            {content.map((item, index) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-card" key={index}>
                    <i className={item.icon}></i>
                    <h4 className="contact-card-title">{item.title}</h4>
                    <p className="contact-card-value">{item.value}</p>
                </a>
            ))}
        </div>
        <p className="contact-hours">Nuestro horario de atención es de lunes a viernes de 8:00 a.m. a 5:30 p.m.</p>
    </div>
);

// Componente para la sección de Cuidados para productos
const CareInfo = ({ content }) => (
    <div className="document-container care-info-container">
        <h2>TARJETA DE CUIDADOS</h2>
        <p className="care-intro">{content.intro}</p>
        <ul className="care-list">
            {content.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div className="care-contact">
            <p className="care-cta">{content.cta}</p>
            <div className="contact-card-care">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
            </div>
        </div>
    </div>
);

// Componente para la sección de Preguntas Frecuentes
const FaqInfo = ({ content }) => (
    <div className="document-container faq-info-container">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
            {content.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h4 className="faq-question">{item.question}</h4>
                    <p className="faq-answer">{item.answer}</p>
                </div>
            ))}
        </div>
    </div>
);

// Componente principal que gestiona el estado y muestra el contenido correcto
export const Documents = () => {
    const { docName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [docName]);

    const documentData = documents[docName];
    const displayTitle = documentData?.title || "Documentos Legales";

    return (
        <div className="documents-page">
            <header className="page-header">
                <div className="container">
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb-link">Inicio</Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">{displayTitle}</span>
                    </div>
                    <h1 className="page-title">{displayTitle}</h1>
                </div>
            </header>
            <main className="main-content">
                <div className="container">
                    {documentData?.type === 'contact' ? (
                        <ContactInfo content={documentData.content} />
                    ) : documentData?.type === 'care' ? (
                        <CareInfo content={documentData.content} />
                    ) : documentData?.type === 'faq' ? (
                        <FaqInfo content={documentData.content} />
                    ) : (
                        <LegalDocument docName={docName} />
                    )}
                </div>
            </main>
        </div>
    );
};