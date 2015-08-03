import React from 'react';

export default class AppLayout {
    
    constructor(params, screen){
        this.screen = screen;
        this.app = this.screen.app; 
    }

    get style(){
        const state = this.app.getState();
        const style = {
            margin : '0 auto',
        };
        switch (state.mode){
        case 'mobile':
            style.width = 300;
            break;
        case 'tablet':
            style.width = 600;
            break;
        case 'desktop':
            style.width = 1200;
            break;
        default:
            break;
        }
        return style;
    }
    get className(){
        return 'container-fluid';
    }
    
    renderScreen(params) {
        const title = this.screen.renderTitle();
        const content = this.screen.renderContent();
        return (
            <div style={this.style} className={this.className}>
                {title}
                <div>{content}</div>
            </div>
        ); 
    }
    
} 