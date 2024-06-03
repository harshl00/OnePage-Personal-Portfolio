import requests

API_KEY = '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'
API_URL = 'https://api.openai.com/v1/chat/completions'

def generate_response(prompt):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {API_KEY}'
    }

    data = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'system', 'content': 'You are a helpful assistant.'},
                     {'role': 'user', 'content': prompt}]
    }

    response = requests.post(API_URL, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()['choices'][0]['message']['content']
    else:
        raise Exception(f'Error: {response.status_code}, {response.text}')

if __name__ == '__main__':
    prompt = input("Enter the prompt: ")
    response = generate_response(prompt)
    print(response)
