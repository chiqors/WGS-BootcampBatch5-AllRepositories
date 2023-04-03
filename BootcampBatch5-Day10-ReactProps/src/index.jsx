import ReactDOM from 'react-dom/client';
import Comment from './components/Comment';
import { faker } from '@faker-js/faker';
import 'semantic-ui-css/semantic.min.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const App = () => {
    // generate 3 fake comments
    const fakeComments = [];
    for (let i = 0; i < 3; i++) {
        fakeComments.push({
            author: faker.name.fullName(),
            time: faker.date.past().toLocaleString(),
            text: faker.lorem.paragraph(),
            photo_url: faker.image.avatar()
        });
    }

    return (
        <div className="container mt-3">
            {fakeComments.map((comment, index) => {
                return (
                    <Comment
                        key={index}
                        data={comment}
                    />
                );
            })
            }
        </div>
    );
}

root.render(<App />);