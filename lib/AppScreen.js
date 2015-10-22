import ReactDOM from 'react-dom';
import React from 'react';
import Promise from 'promise';
import { Adaptable } from 'mosaic-adapters';
import AppLayout from './AppLayout';

export default class AppScreen extends Adaptable {

    constructor(options){
        super({adapters: options.app.adapters});
        this.options = this.props = options || {};
        this.app = this.options.app;
    }

    render(params) {
        const that = this;
        return new Promise(function(resolve, reject){
            const layout = that.getAdapter(AppLayout);
            const view = layout.renderScreen(params);
            ReactDOM.render(view, that.options.container, function(err){
                if (err) reject(err);
                else resolve();
            });
        });
    }

    activate(params){
        return this.render(params);
    }
    update(params, oldParams){
        return this.render(params);
    }
    deactivate(params){
        const that = this;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                try {
                    ReactDOM.unmountComponentAtNode(that.options.container);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            }, 1);
        });
    }

    renderTitle(){
        return this.options.title;
    }
    renderContent(){
        return this.options.content;
    }

}
