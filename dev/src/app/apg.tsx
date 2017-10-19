import JSXComponent from "metal-jsx";

class APG extends JSXComponent {
    created() {
        
    }
    
    render() {
        return (
            <div class="apg">
                <div class="apg-header"></div>
                <div class="apg-body"></div>
                <div class="apg-footer"></div>
            </div>
        );
    }
}

export { APG };
export default APG;