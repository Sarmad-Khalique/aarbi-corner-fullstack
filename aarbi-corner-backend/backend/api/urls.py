from django.urls import include, path
from rest_framework import routers
from api import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet),
router.register(r'collections', views.CollectionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('sign-up/', views.SignUpViewSet.as_view(), name="sign-up"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
