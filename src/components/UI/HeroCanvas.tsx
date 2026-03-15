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
        
        class TypingStream {
            text!: string;
            x!: number;
            y!: number;
            speed!: number;
            opacity!: number;
            fontSize!: number;
            color!: string;
            charsTyped!: number;
            delay!: number;
            
            constructor(width: number, height: number, initialDelay: number = 0) {
                this.reset(width, height, initialDelay);
            }
            
            reset(width: number, height: number, initialDelay: number = 0) {
                this.text = odooCodeSnippets[Math.floor(Math.random() * odooCodeSnippets.length)];
                this.fontSize = Math.floor(Math.random() * 6 + 12); // 12px to 18px
                this.x = Math.random() * (width * 0.8); // Mostly start on screen
                this.y = Math.random() * height;
                this.speed = Math.random() * 1.5 + 0.8; // 0.8 to 2.3 characters per frame (fast typing)
                this.opacity = Math.random() * 0.2 + 0.08; // 0.08 to 0.28 opacity
                
                // Deep gray variations
                const grays = [
                    '100, 100, 100',
                    '130, 130, 130',
                    '160, 160, 160',
                    '80, 80, 80'
                ];
                this.color = grays[Math.floor(Math.random() * grays.length)];
                this.charsTyped = 0;
                this.delay = initialDelay;
            }
            
            update(width: number, height: number) {
                if (this.delay > 0) {
                    this.delay -= 1;
                    return;
                }
                
                this.charsTyped += this.speed;
                
                // Reset after it finishes typing plus a random pause
                if (this.charsTyped > this.text.length + (Math.random() * 60 + 20)) {
                    this.reset(width, height, Math.floor(Math.random() * 30));
                }
            }
            
            draw(ctx: CanvasRenderingContext2D) {
                if (this.delay > 0 || this.charsTyped <= 0) return;
                
                ctx.font = `500 ${this.fontSize}px "Space Grotesk", monospace`;
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                
                const visibleText = this.text.substring(0, Math.floor(this.charsTyped));
                ctx.fillText(visibleText, this.x, this.y);
                
                // Draw a typing cursor at the end
                if (Math.floor(this.charsTyped) < this.text.length && Math.random() > 0.1) {
                    const textWidth = ctx.measureText(visibleText).width;
                    ctx.fillRect(this.x + textWidth + 2, this.y - this.fontSize * 0.7, this.fontSize * 0.5, this.fontSize);
                }
            }
        }

        const streams: TypingStream[] = [];

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
            // Higher density
            const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 7000));
            for (let i = 0; i < count; i++) {
                // Stagger the initial delays so they don't all start at once
                streams.push(new TypingStream(canvas.width, canvas.height, Math.floor(Math.random() * 200)));
            }
        };

        const animate = () => {
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
