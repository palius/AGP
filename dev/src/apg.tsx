import JSXComponent from 'metal-jsx';

class APG extends JSXComponent {
    created() {
        console.log("Element created.");
    }
    render() {
        return (
            <div>
                <div>APG</div>
            </div>
        );
    }
}

export { APG };
export default APG;