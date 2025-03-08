import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class Extension {
    
    enable() {
        Main.panel.add_style_class_name('superterran-clear-top-bar');
    }

    disable() {
        Main.panel.remove_style_class_name('superterran-clear-top-bar');
    }
}
