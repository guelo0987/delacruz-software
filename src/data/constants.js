import {
    MessageCircle, Settings, CheckCircle2, Rocket, BarChart3, Layers,
    Users, Shield, Zap, DatabaseZap, Cpu, Globe, Clock, Eye, Award,
    Headphones, Wrench, Smartphone, Code2, Target, Bot, Palette,
    MonitorSmartphone, Cog
} from 'lucide-react';

/* ── Navigation Links ── */
export const NAV_LINKS = [
    ['Servicios', '#servicios'],
    ['El Bot', '#producto'],
    ['Proyectos', '#proyectos'],
    ['Contacto', '#contacto'],
];

/* ── Marquee Items ── */
export const MARQUEE_ITEMS = [
    'WhatsApp Business API', 'Inteligencia Artificial', 'Python',
    'React', 'PostgreSQL', 'FastAPI', 'Meta API',
    'REST APIs', 'Docker', 'Node.js', 'Redis',
];

/* ── Typing Phrases ── */
export const TYPING_PHRASES = [
    'automatizado.', 'siempre activo.', 'inteligente.',
    'sin pausas.', 'en WhatsApp.',
];

/* ── Services ── */
export const SERVICES = [
    { icon: 'Bot', c: '#10B981', bg: '#e8fdf0', t: 'Bots de WhatsApp', d: 'Asistentes virtuales con IA que atienden tus clientes 24/7, agendan citas y responden preguntas automáticamente.' },
    { icon: 'Globe', c: '#3FA9F5', bg: '#e8f4fe', t: 'Desarrollo Web', d: 'Páginas web modernas, aplicaciones SaaS y sistemas a medida con las mejores tecnologías.' },
    { icon: 'Smartphone', c: '#a855f7', bg: '#f3e8ff', t: 'Apps Móviles', d: 'Aplicaciones nativas y multiplataforma para iOS y Android que impulsan tu negocio.' },
    { icon: 'Cog', c: '#f59e0b', bg: '#fef3e2', t: 'Automatización', d: 'Conectamos tus herramientas y procesos para eliminar tareas repetitivas y ahorrar tiempo.' },
];

/* ── Projects (types of work, not fake names) ── */
export const PROJECTS = [
    { t: 'E-commerce', cat: 'Tiendas Online', d: 'Tiendas virtuales con catálogo, carrito de compras y pasarelas de pago.', icon: 'Wrench', c: '#f97316', bg: '#fff7ed' },
    { t: 'Apps Empresariales', cat: 'SaaS', d: 'Plataformas web con paneles de administración, reportes y gestión de usuarios.', icon: 'MonitorSmartphone', c: '#10B981', bg: '#f0fdf4' },
    { t: 'Sistemas de Gestión', cat: 'CRM / ERP', d: 'Control de clientes, inventario, facturación y operaciones del negocio.', icon: 'Globe', c: '#a855f7', bg: '#faf5ff' },
    { t: 'Bots Inteligentes', cat: 'WhatsApp IA', d: 'Asistentes por WhatsApp con IA que automatizan la atención al cliente.', icon: 'Bot', c: '#0B2B6A', bg: '#eff6ff' },
    { t: 'Landing Pages', cat: 'Marketing', d: 'Páginas de alto impacto para captar clientes y posicionar tu marca.', icon: 'Palette', c: '#ec4899', bg: '#fdf2f8' },
];

/* ── WhatsApp Demo Chat ── */
export const WHATSAPP_CHAT = [
    { from: 'user', text: 'Hola, ¿qué servicios tienen?' },
    { from: 'bot', text: '¡Bienvenido! 😊 Estos son nuestros servicios:\n\n💆 Masaje relajante — RD$1,500\n💅 Manicure — RD$800\n✂️ Corte de cabello — RD$600\n\n¿Quieres agendar una cita?' },
    { from: 'user', text: 'Sí, un masaje para mañana' },
    { from: 'bot', text: '📅 Horarios disponibles mañana:\n\n🕐 10:00 AM\n🕑 2:00 PM\n🕓 4:30 PM\n\n¿Cuál prefieres?' },
    { from: 'user', text: 'A las 2 PM' },
    { from: 'bot', text: '✅ ¡Listo! Cita confirmada:\n\n💆 Masaje relajante\n📅 Mañana, 2:00 PM\n💰 RD$1,500\n\nTe enviaré un recordatorio. ¡Te esperamos!' },
];

/* ── Producto Features (simplified) ── */
export const PRODUCTO_FEATURES = [
    { icon: 'MessageCircle', c: '#3FA9F5', bg: '#e8f4fe', t: 'Atención automática', d: 'Responde preguntas y atiende clientes sin intervención humana.' },
    { icon: 'Zap', c: '#10B981', bg: '#e8fdf0', t: 'Agenda citas por IA', d: 'Busca disponibilidad y crea citas directo en Google Calendar.' },
    { icon: 'Users', c: '#a855f7', bg: '#f3e8ff', t: 'Multi-negocio', d: 'Cada negocio tiene su propia personalidad y configuración.' },
    { icon: 'Shield', c: '#f59e0b', bg: '#fef3e2', t: 'Escala a humano', d: 'Si el cliente necesita ayuda especial, transfiere al dueño.' },
];

/* ── Contact Info ── */
export const CONTACT_INFO = [
    ['WhatsApp', '(829) 630-0007', '#10B981', 'MessageCircle'],
    ['Email', 'dlcdev@vielku.resend.app', '#3FA9F5', 'Mail'],
    ['Teléfono', '(829) 630-0007', '#a855f7', 'Phone'],
];

/* ── Footer Links ── */
export const FOOTER_COLUMNS = [
    ['Servicios', ['Bots de WhatsApp', 'Desarrollo Web', 'Apps Móviles', 'Automatización']],
    ['Legal', ['Privacidad', 'Términos de Uso']],
];

/* ── Dashboard Sidebar Items ── */
export const DASHBOARD_SIDEBAR = [
    ['Dashboard', true],
    ['Bandeja', false],
    ['CRM', false],
    ['Flujos', false],
    ['Analytics', false],
    ['Campañas', false],
    ['Ajustes', false],
];

/* ── Dashboard Stats ── */
export const DASHBOARD_STATS = [
    ['1,847', 'Chats activos', '#3FA9F5', '↑ 14%'],
    ['94%', 'Resolución IA', '#10B981', '↑ 2%'],
    ['0.6s', 'Latencia', '#F59E0B', '↓ 0.2s'],
];

/* ── Dashboard Feed ── */
export const DASHBOARD_FEED = [
    ['CM', 'Carlos M.', 'Pedido #441 completado ✓', '#3FA9F5'],
    ['AR', 'Ana R.', 'Consulta catálogo producto', '#a855f7'],
    ['LP', 'Luis P.', 'Derivado → agente humano', '#f59e0b'],
];

/* ── Icon Map (for data-driven rendering) ── */
export const ICON_MAP = {
    MessageCircle, Settings, CheckCircle2, Rocket, BarChart3, Layers,
    Users, Shield, Zap, DatabaseZap, Cpu, Globe, Clock, Eye, Award,
    Headphones, Wrench, Smartphone, Code2, Target, Bot, Palette,
    MonitorSmartphone, Cog,
};
