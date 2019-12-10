const bundlesTableTemplate = Handlebars.compile(`

        <table class="table table-bordered">
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            {{#each bundles}}
                <tr>
                    <td><a href="#bundlesDetails/{{id}}">{{name}}</a></td>
                    <td>{{description}}</td>
                </tr>
            {{/each}}  
        </table>
`)

const main = `
            <a href=#home> Home </a>
            <a href=#bundles> Bundles </a>

            <div id="mainContent"></div>

            <p>Chelas 2019</p>
        `

const home = `
        <h1> B4-Books</h1>
        <img src=img/books-1012088_640.jpg>
`

const bundles = `
        <div id="bundlesContainer"> </div>
        
        <form id="formCreateBundle" action="/api/bundles" method="POST">
            Name:
            <input type="text" id="inputName" >
            Description:
            <input type="text" id="inputDescription">
            <input type="submit" >
        </form> 
`