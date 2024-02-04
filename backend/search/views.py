from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Припустимо, що у вас є функція search_services, яка використовує LangChain для семантичного пошуку
# from .utils import semantic_search

class SearchAPIView(APIView):
    permission_classes = [IsAuthenticated]

 #    def get(self, request):
  #       query = request.query_params.get('query')
   #      results = semantic_search(query)
  #       return Response({"results": results})
