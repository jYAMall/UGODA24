import os
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
import numpy as np
from scipy.spatial.distance import cosine

# Ваш API ключ для OpenAI

# def get_embedding(text):
  #   response = client.embeddings.create(input=[text], model="text-embedding-3-small")
    # return np.array(response.data[0].embedding)

# def semantic_search(query, documents):
  #   query_embedding = get_embedding(query)
    # doc_embeddings = np.array([get_embedding(doc) for doc in documents])

    # Розрахунок косинусної схожості
    # similarities = [1 - cosine(query_embedding, doc_emb) for doc_emb in doc_embeddings]

    # Сортування документів за спаданням схожості
    # sorted_docs = sorted(zip(documents, similarities), key=lambda x: x[1], reverse=True)
    
    # return sorted_docs

# Приклад використання:
# documents = ["Текст документа 1", "Текст документа 2", "Текст документа 3"]
# query = "Ваш запит для пошуку"
# results = semantic_search(query, documents)
# print("Результати семантичного пошуку:", results)
