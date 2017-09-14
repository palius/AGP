import JSXComponent from 'metal-jsx';

class AGP extends JSXComponent {
    created() {
        console.log("Element created.");
    }

    render() {
        return (
            <div>AGP</div>
        );
    }
}

export { AGP };
export default AGP;