const bundlesTableTemplate = Handlebars.compile(`

        <table class="table table-bordered">
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            {{#each bundles}}
                <tr>
                    <td><a href="bundlesDetails/{{id}}">{{name}}</a></td>
                    <td>{{description}}</td>
                </tr>
            {{/each}}  
        </table>
`)