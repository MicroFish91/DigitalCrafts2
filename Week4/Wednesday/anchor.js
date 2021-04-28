class Anchor {
    constructor(url, text, css){
        this.state = {
            url: url,
            text: text,
            css: css
        }
    }

    render() {
        var anchor = document.createElement('a');
        anchor.setAttribute('class', this.state.css);
        anchor.setAttribute('href', this.state.url);
        anchor.textContent = this.state.text;
        return anchor;
    }
}