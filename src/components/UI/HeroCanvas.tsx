"use client";

import { useEffect, useRef } from 'react';

const odooCodeSnippets = [
    "from odoo import models, fields, api, _",
    "class AccountMove(models.Model):",
    "    _inherit = 'account.move'",
    "    migration_status = fields.Char(string='Status')",
    "    @api.depends('state')",
    "    def _compute_migrated(self):",
    "        for rec in self:",
    "            rec.is_migrated = True",
    "def action_post(self):",
    "    return super(AccountMove, self).action_post()",
    "env['ir.config_parameter'].sudo().set_param('web.base.url', url)",
    "<record id='view_order_form' model='ir.ui.view'>",
    "    <field name='name'>sale.order.upgrade.form</field>",
    "    <field name='model'>sale.order</field>",
    "</record>",
    "sudo -u odoo odoo-bin -c /etc/odoo/odoo.conf -u all -d prod_db",
    "import xmlrpc.client",
    "models.execute_kw(db, uid, pwd, 'res.partner', 'search', [[]])",
    "SELECT id, name FROM res_company WHERE active=true;",
    "UPDATE ir_module_module SET state='installed' WHERE name='base';",
    "docker exec -it odoo-19 psql -U odoo",
    "def setUp(self):",
    "    super(TestMigration, self).setUp()",
    "    self.env.cr.execute('SAVEPOINT test_migrate')",
    "self.env['ir.module.module'].update_list()",
    "01001101 01101001 01100111 01110010 01100001 01110100 01100101",
    "def _upgrade_module(self):",
    "    _logger.info('Starting custom module upgrade script...')",
];

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        
        class CodeStream {
            text: string;
            x: number;
            y: number;
            speed: number;
            opacity: number;
            fontSize: number;
            color: string;
            
            constructor(width: number, height: number, initializeRandomly: boolean = false) {
                this.text = odooCodeSnippets[Math.floor(Math.random() * odooCodeSnippets.length)];
                this.fontSize = Math.floor(Math.random() * 8 + 12); // 12px to 20px
                this.x = Math.random() * width;
                this.y = initializeRandomly ? Math.random() * height : -50;
                this.speed = Math.random() * 1.2 + 0.3; // 0.3 to 1.5 falling speed
                this.opacity = Math.random() * 0.2 + 0.05; // 0.05 to 0.25 opacity (subtle, background layer)
                
                // Mix of Theme Primary (#a855f7) and Accent Cyan (#06b6d4)
                const colors = [
                    '168, 85, 247', // Light Purple
                    '6, 182, 212',  // Cyan
                    '147, 51, 234', // Deep Purple
                    '16, 185, 129'  // Matrix/Tech Green
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            
            update(width: number, height: number) {
                this.y += this.speed;
                if (this.y > height + 50) {
                     // Reset at top when off screen
                     this.text = odooCodeSnippets[Math.floor(Math.random() * odooCodeSnippets.length)];
                     this.fontSize = Math.floor(Math.random() * 8 + 12);
                     this.x = Math.random() * width;
                     this.y = -50;
                     this.speed = Math.random() * 1.2 + 0.3;
                }
            }
            
            draw(ctx: CanvasRenderingContext2D) {
                ctx.font = `500 ${this.fontSize}px "Space Grotesk", monospace`;
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        const streams: CodeStream[] = [];

        const resize = () => {
             const parent = canvas.parentElement;
             if (parent) {
                 canvas.width = parent.clientWidth;
                 canvas.height = parent.clientHeight;
             }
        };

        const init = () => {
            resize();
            streams.length = 0;
            // Determine number of streams based on screen size to prevent clutter while keeping it dense
            const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
            for (let i = 0; i < count; i++) {
                streams.push(new CodeStream(canvas.width, canvas.height, true));
            }
        };

        const animate = () => {
            // Use clearRect for true transparency without ghosting over gradient behind it
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < streams.length; i++) {
                streams[i].update(canvas.width, canvas.height);
                streams[i].draw(ctx);
            }
            
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        
        setTimeout(() => {
             init();
             animate();
        }, 50);
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }} 
        />
    );
}
