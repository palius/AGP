import JSXComponent from "metal-jsx";

class APG extends JSXComponent {
    created() {
        
    }
    
    render() {
        return (
            <div class="apg">
                <div class="apg-header">APG</div>
                <div class="apg-body">BODY</div>
                <div class="apg-footer">FOOTER</div>
            </div>
        );
    }
}

export { APG };
export default APG;