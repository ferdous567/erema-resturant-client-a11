import SingleNav from "../../shared/navbar/SingleNav";

const Blog = () => {
    return (
        <div>
            <SingleNav></SingleNav>
        <div className="w-full bg-gradient-to-r from-purple-200 md:from-red-200 md:to-pink-200">
            <h3 className="bg-gradient-to-r from-orange-400 to-yellow-400 h-[80px] w-full
            text-3xl font-bold text-center pt-3">Blog Page</h3>
            <div className="w-2/3">
                <h2 className="text-2xl text-pink-600 font-bold border-b-2 border-blue-400 p-4">Questions: What is one-way data binding?</h2>
                <p className="p-4"><span className="text-xl font-semibold underline text-green-400">Answer :</span> One-way data binding happens only when the model changes and the view is changed. One-way data binding, while seemingly simpler, is probably the harder one to implement because it requires hooking into JavaScript getters and setters for properties. JavaScript has for a long time had Object. defineProperty .</p>
            </div>
            <div className="w-2/3 my-10 mx-auto">
                <h2 className="text-2xl text-pink-600 font-bold border-b-2 border-blue-400 p-4">Questions: What is NPM in node.js?</h2>
                <p className="p-4"><span className="text-xl font-semibold underline text-green-400">Answer :</span> npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.</p>
            </div>
            <div className="w-2/3">
                <h2 className="text-2xl text-pink-600 font-bold border-b-2 border-blue-400 p-4">Questions: Different between Mongodb database vs mySQL database.</h2>
                <p className="p-4"><span className="text-xl font-semibold underline text-green-400">Answer :</span> MySQL is a relational database system that stores data in a structured tabular format. In contrast, MongoDB stores data as JSON documents in a more flexible format. Both offer performance and scalability, but they give better performance for different use cases. <br /><br /> 
                MySQL is relatively slow because it organizes information logically in tables. The database must write and read data from many tables to update or retrieve information, increasing server load and degrading speed. MongoDB is clearly the right choice if you are deciding based on higher speed and performance</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;