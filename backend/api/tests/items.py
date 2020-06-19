
from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from django.urls import reverse


class ApiUserTestClient(APITestCase):
    """
    Helper base class for API test
    """
    client = APIClient()
    token = 'test123455'

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create(
            username='test@test.com',
            email='test@test.com',
            password='12345',
            is_active=True,
        )
        cls.user.set_password('12345')
        cls.user.save()
        cls.user.oauth2_provider_accesstoken.create(
            expires='2050-12-31 23:59:59', token=cls.token)

    def setUp(self):
        self.login()

    def tearDown(self):
        self.logout()

    def login(self):
        self.client.credentials(Authorization='Bearer {}'.format(self.token))

    def logout(self):
        self.token = None


class TestItemsView(ApiUserTestClient):
    """
    Test Items view
    """

    def test_items_list_route(self):
        response = self.client.get(reverse('items-list'))
        self.assertEqual(response.status_code, 200)
