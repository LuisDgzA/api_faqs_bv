import express from 'express';

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());



let faqs = [
    {
        id: 1,
        question: "Question1",
        answer: "Reducir el esfuerzo de la empresa, trae consigo una disminución de los costos operativos. Las necesidades de los clientes son redireccionadas, para ser autogestionadas"
    },
    {
        id: 2,
        question: "Question 2",
        answer: "De acuerdo con el estudio de tendencias sobre la experiencia del cliente, realizado por Zendesk, más del 60% de los clientes afirma que poder resolver su problema rápidamente es el aspecto más importante para tener una buena experiencia. "
    },
    {
        id: 3,
        question: "Question 3",
        answer: "El recorrido que debe hacer el cliente hasta efectuar la compra o materializar la conversión (dependiendo del objetivo comercial), se reduce considerablemente. El cliente se encontrará en una fase más avanzada del funil, ya despejó sus dudas, entonces tiene un conocimiento y una disposición mayor. "
    },
    {
        id: 4,
        question: "Question 4",
        answer: "Las FAQ se anticipan a los correos, llamadas, comentarios en redes y otros posibles contactos que pueda realizar el cliente, para solucionar su problema. Esto genera una reducción en el número de tickets y una gestión más eficiente, porque permite dedicar la atención en dichos canales a la resolución de situaciones complejas o que requieran un análisis particular."
    }
]

app.get('/getfaqs', (req, res) =>{
    return res.status(200).json({
        message: "all faqs",
        faqs
    });
})

app.get('/getfaq/:id', (req, res) =>{

    const { id } = req.params;

    const intId = parseInt(id);

    const faq = faqs.find(faq => faq.id === intId)

    if(!faq){
        return res.status(404).json({
            message: "Not found"
        })
    }

    return res.status(200).json({
        message: "all faqs",
        faq
    });
})

app.use((req, res, next) => {
    return res.status(404).json({
        message: "Not found"
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})