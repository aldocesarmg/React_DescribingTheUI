function Container({children}) {
    return(
        <div>
            {children}
        </div>
    );
}

function MyChildren() {
    return(
        <div>
            <p>This is my child</p>
        </div>
    );
}

export default function MyFather() {
    return(
        <Container>
            <MyChildren />
        </Container>
    );
}